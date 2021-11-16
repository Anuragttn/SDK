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

type AchTransferResponseVo struct {
	CardLoadResponse AchCardLoadResponseVo `json:"card_load_response,omitempty"`
	Message          string                `json:"message,omitempty"`
	NucleusFundingId string                `json:"nucleus_funding_id,omitempty"`
	Status           string                `json:"status,omitempty"`
	StatusDetails    string                `json:"status_details,omitempty"`
	VendorName       string                `json:"vendor_name,omitempty"`
	VendorRequest    interface{}           `json:"vendor_request,omitempty"`
	VendorResponse   interface{}           `json:"vendor_response,omitempty"`
}
