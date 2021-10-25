/*
 * Hydrogen Admin API
 *
 * The Hydrogen Admin API
 *
 * API version: 1.4.0
 * Contact: info@hydrogenplatform.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type ResponseEntity struct {
	Body interface{} `json:"body,omitempty"`
	StatusCode string `json:"status_code,omitempty"`
	StatusCodeValue int32 `json:"status_code_value,omitempty"`
}
