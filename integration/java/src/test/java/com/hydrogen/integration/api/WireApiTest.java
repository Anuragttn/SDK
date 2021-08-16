/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.api;

import com.hydrogen.integration.model.WireTransferResponseVO;
import com.hydrogen.integration.ApiException;
import java.util.UUID;
import com.hydrogen.integration.model.WireBankLinkRequestCO;
import com.hydrogen.integration.model.WireBankLinkResponseVO;
import com.hydrogen.integration.model.WireTransferRequestCO;
import org.junit.Test;
import org.junit.Ignore;

import java.util.List;

/**
 * API tests for WireApi
 */
@Ignore
public class WireApiTest {

    private final WireApi api = new WireApi();

    
    /**
     * Cancel the Wire transfer
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void cancelWireTransferUsingDeleteTest() throws ApiException {
        UUID nucleusFundingId = null;
        WireTransferResponseVO response = api.cancelWireTransferUsingDelete(nucleusFundingId);

        // TODO: test validations
    }
    
    /**
     * Create bank link
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createWireBankLinkUsingPostTest() throws ApiException {
        WireBankLinkRequestCO request = null;
        WireBankLinkResponseVO response = api.createWireBankLinkUsingPost(request);

        // TODO: test validations
    }
    
    /**
     * Delete bank link
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteWireBankLinkUsingDeleteTest() throws ApiException {
        UUID nucleusBankLinkId = null;
        WireBankLinkResponseVO response = api.deleteWireBankLinkUsingDelete(nucleusBankLinkId);

        // TODO: test validations
    }
    
    /**
     * Get a list of Wire transfers
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getListOfWireTransfersUsingGetTest() throws ApiException {
        UUID nucleusClientId = null;
        List<WireTransferResponseVO> response = api.getListOfWireTransfersUsingGet(nucleusClientId);

        // TODO: test validations
    }
    
    /**
     * Get bank link
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getWireBankLinkUsingGetTest() throws ApiException {
        UUID nucleusBankLinkId = null;
        WireBankLinkResponseVO response = api.getWireBankLinkUsingGet(nucleusBankLinkId);

        // TODO: test validations
    }
    
    /**
     * Get client bank links
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getWireClientBankLinksUsingGetTest() throws ApiException {
        UUID nucleusClientId = null;
        List<WireBankLinkResponseVO> response = api.getWireClientBankLinksUsingGet(nucleusClientId);

        // TODO: test validations
    }
    
    /**
     * Get the Wire transfer
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getWireTransferUsingGetTest() throws ApiException {
        UUID nucleusFundingId = null;
        WireTransferResponseVO response = api.getWireTransferUsingGet(nucleusFundingId);

        // TODO: test validations
    }
    
    /**
     * Submit a Wire transfer
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void submitWireTransferUsingPostTest() throws ApiException {
        WireTransferRequestCO transferRequest = null;
        WireTransferResponseVO response = api.submitWireTransferUsingPost(transferRequest);

        // TODO: test validations
    }
    
    /**
     * Update bank link
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateWireBankLinkUsingPutTest() throws ApiException {
        UUID nucleusBankLinkId = null;
        WireBankLinkResponseVO response = api.updateWireBankLinkUsingPut(nucleusBankLinkId);

        // TODO: test validations
    }
    
}
