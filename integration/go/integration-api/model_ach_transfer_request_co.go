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

type AchTransferRequestCo struct {
	IsReserve        bool        `json:"is_reserve,omitempty"`
	NucleusFundingId string      `json:"nucleus_funding_id,omitempty"`
	VendorRequest    interface{} `json:"vendor_request,omitempty"`
}
