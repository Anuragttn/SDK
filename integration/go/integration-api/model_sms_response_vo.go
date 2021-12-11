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

type SmsResponseVo struct {
	Message           string      `json:"message,omitempty"`
	NucleusBusinessId string      `json:"nucleus_business_id,omitempty"`
	NucleusClientId   string      `json:"nucleus_client_id,omitempty"`
	SmsId             string      `json:"sms_id,omitempty"`
	VendorName        string      `json:"vendor_name,omitempty"`
	VendorResponse    interface{} `json:"vendor_response,omitempty"`
}