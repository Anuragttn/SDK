/*
 * Hydrogen Nucleus API
 *
 * The Hydrogen Nucleus API
 *
 * API version: 1.9.4
 * Contact: info@hydrogenplatform.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package nucleus_api

// Business Details Mapping Object
type BusinessDetailsVo struct {
	// address
	Address []BusinessAddress `json:"address,omitempty"`
	// businessId
	BusinessId string `json:"business_id,omitempty"`
	// dbaName
	DbaName string `json:"dba_name,omitempty"`
	// email
	Email string `json:"email,omitempty"`
	// legalName
	LegalName string `json:"legal_name,omitempty"`
	// website
	Website string `json:"website,omitempty"`
}