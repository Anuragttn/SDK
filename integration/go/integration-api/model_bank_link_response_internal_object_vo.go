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

type BankLinkResponseInternalObjectVo struct {
	Message         string   `json:"message,omitempty"`
	NucleusBankLink BankLink `json:"nucleus_bank_link,omitempty"`
	StatusCode      int32    `json:"status_code,omitempty"`
}
