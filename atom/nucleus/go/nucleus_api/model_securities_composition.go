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

type SecuritiesComposition struct {
	// Securities Composition component Id
	ComponentId string `json:"component_id"`
	// Securities Composition End Date
	EndDate string `json:"end_date"`
	// Securities Composition Start Date
	StartDate string `json:"start_date"`
	// Securities Composition weight
	Weight float64 `json:"weight"`
}
