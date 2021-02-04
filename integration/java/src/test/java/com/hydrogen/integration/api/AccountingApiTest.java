/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.api;

import com.hydrogen.integration.ApiException;
import com.hydrogen.integration.model.AccountingFinalResponseVO;
import org.threeten.bp.OffsetDateTime;
import java.util.UUID;
import com.hydrogen.integration.model.VendorAccessConfigVO;
import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for AccountingApi
 */
@Ignore
public class AccountingApiTest {

    private final AccountingApi api = new AccountingApi();

    
    /**
     * Update/Create all customers in Nucleus for a given nucleus_client_id
     *
     * Update/Create all customers in Nucleus for a given nucleus_client_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateCustomerTest() throws ApiException {
        UUID nucleusClientId = null;
        AccountingFinalResponseVO response = api.createOrUpdateCustomer(nucleusClientId);

        // TODO: test validations
    }
    
    /**
     * Update/Create all customers revenue in Nucleus for a given nucleus_customer_id
     *
     * Update/Create all customers revenue in Nucleus for a given nucleus_customer_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateCustomerRevenueTest() throws ApiException {
        UUID nucleusCustomerId = null;
        OffsetDateTime startDate = null;
        String accountingMethod = null;
        OffsetDateTime endDate = null;
        AccountingFinalResponseVO response = api.createOrUpdateCustomerRevenue(nucleusCustomerId, startDate, accountingMethod, endDate);

        // TODO: test validations
    }
    
    /**
     * Create/Update invoice payment in Nucleus for a given nucleus_invoice_id
     *
     * Create/Update invoice payment in Nucleus for a given nucleus_invoice_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateInvoicePaymentTest() throws ApiException {
        UUID nucleusInvoiceId = null;
        AccountingFinalResponseVO response = api.createOrUpdateInvoicePayment(nucleusInvoiceId);

        // TODO: test validations
    }
    
    /**
     * Update/Create all invoices in Nucleus for a given nucleus_client_id
     *
     * Update/Create all invoices in Nucleus for a given nucleus_client_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateInvoicesTest() throws ApiException {
        UUID nucleusCustomerId = null;
        OffsetDateTime startDate = null;
        OffsetDateTime endDate = null;
        AccountingFinalResponseVO response = api.createOrUpdateInvoices(nucleusCustomerId, startDate, endDate);

        // TODO: test validations
    }
    
    /**
     * Permanently delete relation with particular accounting vendor.
     *
     * Permanently delete relation with particular accounting vendor.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteAccountingVendorAccessConfigIsActiveByIdTest() throws ApiException {
        UUID id = null;
        api.deleteAccountingVendorAccessConfigIsActiveById(id);

        // TODO: test validations
    }
    
    /**
     * Get accounting stats from financial statements at the vendor for the business provided
     *
     * Get accounting stats from financial statements at the vendor for the business provided
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAccountingStatsTest() throws ApiException {
        String accountingMethod = null;
        UUID nucleusClientId = null;
        String periodLength = null;
        Integer periodMonth = null;
        Integer periodQuarter = null;
        String periodType = null;
        Integer periodYear = null;
        String report = null;
        OffsetDateTime statementDate = null;
        AccountingFinalResponseVO response = api.getAccountingStats(accountingMethod, nucleusClientId, periodLength, periodMonth, periodQuarter, periodType, periodYear, report, statementDate);

        // TODO: test validations
    }
    
    /**
     * Get Accounting Vendor Config
     *
     * Get Accounting vendor config information with its status.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAccountingVendorInfoUsingClientIdTest() throws ApiException {
        UUID nucleusClientId = null;
        VendorAccessConfigVO response = api.getAccountingVendorInfoUsingClientId(nucleusClientId);

        // TODO: test validations
    }
    
    /**
     * Enable/Disable relation with particular accounting vendor.
     *
     * Enable/Disable link with particular accounting vendor.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateAccountingVendorAccessConfigIsActiveByIdTest() throws ApiException {
        UUID id = null;
        Boolean isActive = null;
        VendorAccessConfigVO response = api.updateAccountingVendorAccessConfigIsActiveById(id, isActive);

        // TODO: test validations
    }
    
    /**
     * Update customer in Nucleus for a given nucleus_customer_id
     *
     * Update customer in Nucleus for a given nucleus_customer_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateCustomerTest() throws ApiException {
        UUID nucleusCustomerId = null;
        AccountingFinalResponseVO response = api.updateCustomer(nucleusCustomerId);

        // TODO: test validations
    }
    
    /**
     * Update invoice in Nucleus for a given nucleus_invoice_id
     *
     * Update invoice in Nucleus for a given nucleus_invoice_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateInvoiceTest() throws ApiException {
        UUID nucleusInvoiceId = null;
        AccountingFinalResponseVO response = api.updateInvoice(nucleusInvoiceId);

        // TODO: test validations
    }
    
}
