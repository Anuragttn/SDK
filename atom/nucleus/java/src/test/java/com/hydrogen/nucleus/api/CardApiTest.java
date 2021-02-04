/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.api;

import com.hydrogen.nucleus.ApiException;
import com.hydrogen.nucleus.model.Card;
import com.hydrogen.nucleus.model.CardProgram;
import org.threeten.bp.LocalDate;
import com.hydrogen.nucleus.model.PageCard;
import com.hydrogen.nucleus.model.PageCardProgram;
import com.hydrogen.nucleus.model.PagePortfolioTransaction;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

import java.util.List;

/**
 * API tests for CardApi
 */
@Ignore
public class CardApiTest {

    private final CardApi api = new CardApi();

    
    /**
     * Create a cardProgram request
     *
     * Create a new cardProgram request.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createCardProgramUsingPostTest() throws ApiException {
        CardProgram cardProgramRequest = null;
        CardProgram response = api.createCardProgramUsingPost(cardProgramRequest);

        // TODO: test validations
    }
    
    /**
     * Create a card request
     *
     * Create a new card request.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createCardUsingPostTest() throws ApiException {
        Card cardRequest = null;
        Card response = api.createCardUsingPost(cardRequest);

        // TODO: test validations
    }
    
    /**
     * Delete an cardProgram
     *
     * Permanently delete an cardProgram.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteCardProgramUsingDeleteTest() throws ApiException {
        UUID cardProgramId = null;
        api.deleteCardProgramUsingDelete(cardProgramId);

        // TODO: test validations
    }
    
    /**
     * Delete a card request
     *
     * Permanently delete a card request.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteCardUsingDeleteTest() throws ApiException {
        UUID cardId = null;
        api.deleteCardUsingDelete(cardId);

        // TODO: test validations
    }
    
    /**
     * List all card requests
     *
     * Get the information for all card requests.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCardAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageCard response = api.getCardAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * List all card asset sizes
     *
     * Get a list of asset sizes by date for an card.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCardAssetSizeAggAllUsingGetTest() throws ApiException {
        UUID cardId = null;
        String currencyConversion = null;
        LocalDate endDate = null;
        Boolean getLatest = null;
        String sortType = null;
        LocalDate startDate = null;
        List<Object> response = api.getCardAssetSizeAggAllUsingGet(cardId, currencyConversion, endDate, getLatest, sortType, startDate);

        // TODO: test validations
    }
    
    /**
     * List all cardProgram
     *
     * Get information for all cardProgram.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCardProgramAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageCardProgram response = api.getCardProgramAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve an cardProgram
     *
     * Retrieve the information for a specific cardProgram.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCardProgramUsingGetTest() throws ApiException {
        UUID cardProgramId = null;
        CardProgram response = api.getCardProgramUsingGet(cardProgramId);

        // TODO: test validations
    }
    
    /**
     * List all card transactions
     *
     * Get the information for all transactions for an card.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCardTransactionAggAllUsingGetTest() throws ApiException {
        UUID cardId = null;
        Boolean ascending = null;
        String currencyConversion = null;
        LocalDate endDate = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        LocalDate startDate = null;
        PagePortfolioTransaction response = api.getCardTransactionAggAllUsingGet(cardId, ascending, currencyConversion, endDate, orderBy, page, size, startDate);

        // TODO: test validations
    }
    
    /**
     * Retrieve a card request
     *
     * Retrieve the information for a card request.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCardUsingGetTest() throws ApiException {
        UUID cardId = null;
        Card response = api.getCardUsingGet(cardId);

        // TODO: test validations
    }
    
    /**
     * Update an cardProgram
     *
     * Update the information for an cardProgram.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateCardProgramUsingPutTest() throws ApiException {
        Object cardProgram = null;
        UUID cardProgramId = null;
        CardProgram response = api.updateCardProgramUsingPut(cardProgram, cardProgramId);

        // TODO: test validations
    }
    
    /**
     * Update a card request
     *
     * Update the information for a card request.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateCardUsingPutTest() throws ApiException {
        Object card = null;
        UUID cardId = null;
        Card response = api.updateCardUsingPut(card, cardId);

        // TODO: test validations
    }
    
}
