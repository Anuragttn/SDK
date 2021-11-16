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

type BrokerageDepositVo struct {
	Message          string      `json:"message,omitempty"`
	NucleusFundingId string      `json:"nucleus_funding_id,omitempty"`
	Status           string      `json:"status,omitempty"`
	VendorName       string      `json:"vendor_name,omitempty"`
	VendorResponse   interface{} `json:"vendor_response,omitempty"`
}
