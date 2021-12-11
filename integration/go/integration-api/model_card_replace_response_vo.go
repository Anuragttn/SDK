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

type CardReplaceResponseVo struct {
	CardStatus            string      `json:"card_status,omitempty"`
	Message               string      `json:"message,omitempty"`
	NewNucleusCardId      string      `json:"new_nucleus_card_id,omitempty"`
	NucleusCardId         string      `json:"nucleus_card_id,omitempty"`
	ReplacedNucleusCardId string      `json:"replaced_nucleus_card_id,omitempty"`
	VendorName            string      `json:"vendor_name,omitempty"`
	VendorResponse        interface{} `json:"vendor_response,omitempty"`
}