/*
 * Hydrogen Nucleus API
 *
 * The Hydrogen Nucleus API
 *
 * API version: 1.9.5
 * Contact: info@hydrogenplatform.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package nucleus_api

type BulkTransactionVo struct {
	Error_   interface{} `json:"error,omitempty"`
	Id       string      `json:"id,omitempty"`
	Progress interface{} `json:"progress,omitempty"`
	Status   string      `json:"status,omitempty"`
	Success  interface{} `json:"success,omitempty"`
}
