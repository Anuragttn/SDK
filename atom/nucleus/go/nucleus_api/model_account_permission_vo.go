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

// AccountPermissionVO Object
type AccountPermissionVo struct {
	// accountId
	AccountId string `json:"account_id,omitempty"`
	// PermissionVO
	Clients []PermissionVo `json:"clients,omitempty"`
}
