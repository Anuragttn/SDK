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



// Questionnaire Object
type Questionnaire struct {
	CreateDate string `json:"create_date,omitempty"`
	// decision_tree_id
	DecisionTreeId string `json:"decision_tree_id,omitempty"`
	// description
	Description string `json:"description,omitempty"`
	Id          string `json:"id,omitempty"`
	// is_active
	IsActive bool `json:"is_active,omitempty"`
	// metadata
	Metadata map[string]string `json:"metadata,omitempty"`
	// name
	Name        string     `json:"name"`
	Questions   []Question `json:"questions,omitempty"`
	SecondaryId string     `json:"secondary_id,omitempty"`
	// type
	Type_      string    `json:"type,omitempty"`
	UpdateDate string `json:"update_date,omitempty"`
}