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



// Aggregation Account Transaction Object
type AggregationAccountTransaction struct {
	// aggregationAccountId
	AggregationAccountId string      `json:"aggregation_account_id,omitempty"`
	BankCredit           *BankCredit `json:"bank_credit,omitempty"`
	Cash                 *Cash       `json:"cash,omitempty"`
	CreateDate           string   `json:"create_date,omitempty"`
	// currencyCode
	CurrencyCode       string            `json:"currency_code"`
	Id                 string            `json:"id,omitempty"`
	Investment         *Investment       `json:"investment,omitempty"`
	IsExcludedAnalysis bool              `json:"is_excluded_analysis,omitempty"`
	IsFee              bool              `json:"is_fee,omitempty"`
	IsRecurring        bool              `json:"is_recurring,omitempty"`
	IsTransfer         bool              `json:"is_transfer,omitempty"`
	Metadata           map[string]string `json:"metadata,omitempty"`
	SecondaryId        string            `json:"secondary_id,omitempty"`
	// status
	Status string `json:"status,omitempty"`
	// transactionDate
	TransactionDate string `json:"transaction_date"`
	UpdateDate      string `json:"update_date,omitempty"`
}
