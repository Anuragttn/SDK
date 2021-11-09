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

// Location Object
type Location struct {
	// addressLine1
	AddressLine1 string `json:"address_line1,omitempty"`
	// addressLine2
	AddressLine2 string `json:"address_line2,omitempty"`
	// city
	City string `json:"city,omitempty"`
	// country
	Country string `json:"country,omitempty"`
	// latitude
	Latitude float64 `json:"latitude,omitempty"`
	// longitude
	Longitude float64 `json:"longitude,omitempty"`
	// postalcode
	Postalcode string `json:"postalcode,omitempty"`
	// state
	State string `json:"state,omitempty"`
}
