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



type ModelComment struct {
	// Model Comment comment
	Comment    string    `json:"comment"`
	CreateDate string `json:"create_date,omitempty"`
	// Model Comment date
	Date     string            `json:"date"`
	Id       string            `json:"id,omitempty"`
	Metadata map[string]string `json:"metadata,omitempty"`
	// Model Comment Model Id
	ModelId     string    `json:"model_id"`
	SecondaryId string    `json:"secondary_id,omitempty"`
	UpdateDate  string `json:"update_date,omitempty"`
}
