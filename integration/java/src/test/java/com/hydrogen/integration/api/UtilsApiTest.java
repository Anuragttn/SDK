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
import com.hydrogen.integration.model.ExchangeTokenCO;
import com.hydrogen.integration.model.CreateUserRequest;
import com.hydrogen.integration.model.ExchangePublicTokenVO;
import org.threeten.bp.OffsetDateTime;
import com.hydrogen.integration.model.Pageobject;
import java.util.UUID;
import com.hydrogen.integration.model.UserResponseVO;
import com.hydrogen.integration.model.WidgetUrlVO;
import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for UtilsApi
 */
@Ignore
public class UtilsApiTest {

    private final UtilsApi api = new UtilsApi();

    
    /**
     * Retrieve token based on certain vendor specific value
     *
     * Retrieve the token.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createTokenExchangeUsingPostTest() throws ApiException {
        ExchangeTokenCO exchangeTokenCO = null;
        ExchangePublicTokenVO response = api.createTokenExchangeUsingPost(exchangeTokenCO);

        // TODO: test validations
    }
    
    /**
     * Create user in vendor
     *
     * Create user in vendor.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createUserUsingPostTest() throws ApiException {
        CreateUserRequest createUserRequest = null;
        UserResponseVO response = api.createUserUsingPost(createUserRequest);

        // TODO: test validations
    }
    
    /**
     * Gel all audit log
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAuditLogAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        OffsetDateTime endDate = null;
        String event = null;
        String integrationType = null;
        Boolean isRequest = null;
        UUID nucleusClientId = null;
        String orderBy = null;
        Integer page = null;
        String requestType = null;
        Integer size = null;
        OffsetDateTime startDate = null;
        String vendorName = null;
        Pageobject response = api.getAuditLogAllUsingGet(ascending, endDate, event, integrationType, isRequest, nucleusClientId, orderBy, page, requestType, size, startDate, vendorName);

        // TODO: test validations
    }
    
    /**
     * Retrieve widget link
     *
     * Retrieve the widget link.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getWidgetLinkUsingGetTest() throws ApiException {
        UUID nucleusClientId = null;
        Boolean isMobileWebview = null;
        String mode = null;
        String vendorName = null;
        WidgetUrlVO response = api.getWidgetLinkUsingGet(nucleusClientId, isMobileWebview, mode, vendorName);

        // TODO: test validations
    }
    
}
