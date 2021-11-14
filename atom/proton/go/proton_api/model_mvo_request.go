/*
 * Hydrogen Proton API
 *
 * Financial engineering module of Hydrogen Atom
 *
 * API version: 1.9.2
 * Contact: info@hydrogenplatform.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package proton_api

type MvoRequest struct {
	Tickers          []string    `json:"tickers"`
	WConfig          WConfig     `json:"w_config"`
	MinAssets        int32       `json:"min_assets"`
	EndDate          string      `json:"end_date,omitempty"`
	MarketDataSource string      `json:"market_data_source,omitempty"`
	WAssetConfig     interface{} `json:"w_asset_config,omitempty"`
	StartDate        string      `json:"start_date,omitempty"`
	TgtType          string      `json:"tgt_type,omitempty"`
	UseProxyData     bool        `json:"use_proxy_data,omitempty"`
	TgtVal           float32     `json:"tgt_val,omitempty"`
	SecTypes         []string    `json:"sec_types"`
}