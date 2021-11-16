/*
 * Hydrogen Integration API
 *
 * The Hydrogen Integration API
 *
 * API version: 1.3.1
 * Contact: info@hydrogenplatform.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package integration_api

type AchCardLoadResponseVo struct {
	CardLoad           interface{} `json:"card_load,omitempty"`
	CardLoadStatusCode int32       `json:"card_load_status_code,omitempty"`
}
