'use strict'
/** @module write
 * Writes a data point to InfluxDB using the Javascript client library with Node.js.
**/

import 'dotenv/config'

import { InfluxDB, Point } from '@influxdata/influxdb-client'

/** Environment variables **/
const url = process.env.DOCKER_INFLUXDB_INIT_URL
const token = process.env.DOCKER_INFLUXDB_INIT_ADMIN_TOKEN
const org = process.env.DOCKER_INFLUXDB_INIT_ORG
const bucket = process.env.DOCKER_INFLUXDB_INIT_BUCKET

/**
 * Instantiate the InfluxDB client
 * with a configuration object.
 **/
const influxDB = new InfluxDB({ url, token })

/**
 * Create a write client from the getWriteApi method.
 * Provide your `org` and `bucket`.
 **/
const writeApi = influxDB.getWriteApi(org, bucket)

/**
 * Apply default tags to all points.
 **/
// writeApi.useDefaultTags({ region: 'west' })

/**
 * Create a point and write it to the buffer.
 **/
const point1 = new Point('temperature')
  // .tag('sensor_id', 'TLM01')
  .floatField('value', 25.0)
console.log(` ${point1}`)

writeApi.writePoint(point1)

/**
 * Flush pending writes and close writeApi.
 **/
writeApi.close().then(() => {
  console.log('WRITE FINISHED')
})

/**
 * Instantiate the InfluxDB client
 * with a configuration object.
 *
 * Get a query client configured for your org.
 **/
const queryApi = new InfluxDB({url, token}).getQueryApi(org)

/** To avoid SQL injection, use a string literal for the query. */
const fluxQuery = 'from(bucket:"bucket") |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")'

const myQuery = async () => {
  for await (const {values, tableMeta} of queryApi.iterateRows(fluxQuery)) {
    const o = tableMeta.toObject(values)
    console.log(
      `${o._time} ${o._measurement} in '${o.location}' (${o.sensor_id}): ${o._field}=${o._value}`
    )
  }
}

/** Execute a query and receive line table metadata and rows. */
myQuery()