import dotenv from 'dotenv'
import path from 'path'

const rootDirectory = path.resolve(__dirname, '..', '..')

dotenv.config({ path: path.resolve(rootDirectory, '.env') })

/**
 * Get environment variable from process.env
 * @param {string} key The key of the environment variable
 * @param {*} defaultValue A default value if the environment variable
 * is not found
 *
 * @throws {Error} Will throw an error if the key not found in process.env
 * and no default value is received
 *
 * @returns {*} The variable value or the defaultValue
 */
export default (key, defaultValue) => {
  if (!defaultValue && !process.env[key]) {
    throw Error(
      `Environment variable ${key} not defined and no default value was received`,
    )
  }

  return process.env[key] || defaultValue
}
