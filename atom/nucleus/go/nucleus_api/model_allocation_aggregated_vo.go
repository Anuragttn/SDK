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

type AllocationAggregatedVo struct {
	AllocationCategory     string                              `json:"allocation_category,omitempty"`
	AllocationCompositions []AllocationCompositionAggregatedVo `json:"allocation_compositions,omitempty"`
	AllocationDescription  string                              `json:"allocation_description,omitempty"`
	AllocationId           string                              `json:"allocation_id,omitempty"`
	AllocationName         string                              `json:"allocation_name,omitempty"`
	AllocationSecondaryId  string                              `json:"allocation_secondary_id,omitempty"`
}