/*
 * Hydrogen Electron API
 * The Hydrogen Electron API
 *
 * OpenAPI spec version: 1.3.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.electron.api;

import com.hydrogen.electron.model.AchCardRequestCO;
import com.hydrogen.electron.model.AchCardResponseVO;
import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for AchApi
 */
@Ignore
public class AchApiTest {

    private final AchApi api = new AchApi();

    
    /**
     * Fund card
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void fundCardUsingPostTest() throws Exception {
        AchCardRequestCO achCardRequestCO = null;
        AchCardResponseVO response = api.fundCardUsingPost(achCardRequestCO);

        // TODO: test validations
    }
    
}
