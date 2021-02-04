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
import com.hydrogen.nucleus.model.Answer;
import com.hydrogen.nucleus.model.ClientResponse;
import com.hydrogen.nucleus.model.PageAnswer;
import com.hydrogen.nucleus.model.PageClientResponse;
import com.hydrogen.nucleus.model.PageQuestion;
import com.hydrogen.nucleus.model.PageQuestionnaire;
import com.hydrogen.nucleus.model.Question;
import com.hydrogen.nucleus.model.Questionnaire;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for QuestionnaireApi
 */
@Ignore
public class QuestionnaireApiTest {

    private final QuestionnaireApi api = new QuestionnaireApi();

    
    /**
     * Create an answer
     *
     * Create a new answer for question.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAnswerUsingPostTest() throws ApiException {
        Answer answer = null;
        Answer response = api.createAnswerUsingPost(answer);

        // TODO: test validations
    }
    
    /**
     * Create a client response
     *
     * Create a new client response for a question as part of a questionnaires.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createClientResponseUsingPostTest() throws ApiException {
        ClientResponse clientResponse = null;
        ClientResponse response = api.createClientResponseUsingPost(clientResponse);

        // TODO: test validations
    }
    
    /**
     * Create a question
     *
     * Create a new question for questionnaire.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createQuestionUsingPostTest() throws ApiException {
        Question question = null;
        Question response = api.createQuestionUsingPost(question);

        // TODO: test validations
    }
    
    /**
     * Create a questionnaire
     *
     * Create a new questionnaire for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createQuestionnaireUsingPostTest() throws ApiException {
        Questionnaire questionnaire = null;
        Questionnaire response = api.createQuestionnaireUsingPost(questionnaire);

        // TODO: test validations
    }
    
    /**
     * Delete an answer
     *
     * Delete an answer for the question
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteAnswerUsingDeleteTest() throws ApiException {
        UUID answerId = null;
        api.deleteAnswerUsingDelete(answerId);

        // TODO: test validations
    }
    
    /**
     * Delete a client response
     *
     * Permanently delete a client response for a client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteClientResponseUsingDeleteTest() throws ApiException {
        UUID clientResponseId = null;
        api.deleteClientResponseUsingDelete(clientResponseId);

        // TODO: test validations
    }
    
    /**
     * Delete a question
     *
     * Delete an answer for the question
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteQuestionUsingDeleteTest() throws ApiException {
        UUID questionId = null;
        api.deleteQuestionUsingDelete(questionId);

        // TODO: test validations
    }
    
    /**
     * Delete a questionnaire
     *
     * Permanently delete a questionnaire for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteQuestionnaireUsingDeleteTest() throws ApiException {
        UUID questionnaireId = null;
        api.deleteQuestionnaireUsingDelete(questionnaireId);

        // TODO: test validations
    }
    
    /**
     * List all Answers
     *
     * Get information for all Answers
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAnswerAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageAnswer response = api.getAnswerAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve an answer
     *
     * Retrieve the information for an answer for question
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAnswerUsingGetTest() throws ApiException {
        UUID answerId = null;
        Answer response = api.getAnswerUsingGet(answerId);

        // TODO: test validations
    }
    
    /**
     * List all client responses
     *
     * Get all the client responses for questions as part of a questionnaire defined by your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientResponseAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageClientResponse response = api.getClientResponseAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a client response
     *
     * Retrieve the information for a client response for a client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientResponseUsingGetTest() throws ApiException {
        UUID clientResponseId = null;
        ClientResponse response = api.getClientResponseUsingGet(clientResponseId);

        // TODO: test validations
    }
    
    /**
     * List all Questions
     *
     * Get information for all Questions
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getQuestionAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageQuestion response = api.getQuestionAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a question
     *
     * Retrieve the information for a question for questionnaire
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getQuestionUsingGetTest() throws ApiException {
        UUID questionId = null;
        Question response = api.getQuestionUsingGet(questionId);

        // TODO: test validations
    }
    
    /**
     * List all questionnaires
     *
     * Get the information for all questionnaires defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getQuestionnaireAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageQuestionnaire response = api.getQuestionnaireAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a questionnaire
     *
     * Retrieve the information for a questionnaire for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getQuestionnaireUsingGetTest() throws ApiException {
        UUID questionnaireId = null;
        Questionnaire response = api.getQuestionnaireUsingGet(questionnaireId);

        // TODO: test validations
    }
    
    /**
     * Update an answer
     *
     * Update a answer for question.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateAnswerUsingPutTest() throws ApiException {
        Object answer = null;
        UUID answerId = null;
        Answer response = api.updateAnswerUsingPut(answer, answerId);

        // TODO: test validations
    }
    
    /**
     * Update a client response
     *
     * Update a client response for a client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateClientResponseUsingPutTest() throws ApiException {
        Object clientResponse = null;
        UUID clientResponseId = null;
        ClientResponse response = api.updateClientResponseUsingPut(clientResponse, clientResponseId);

        // TODO: test validations
    }
    
    /**
     * Update a question.
     *
     * Update a question for questionnaire.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateQuestionUsingPutTest() throws ApiException {
        Object question = null;
        UUID questionId = null;
        Question response = api.updateQuestionUsingPut(question, questionId);

        // TODO: test validations
    }
    
    /**
     * Update a questionnaire
     *
     * Update a questionnaire for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateQuestionnaireUsingPutTest() throws ApiException {
        Object questionnaire = null;
        UUID questionnaireId = null;
        Questionnaire response = api.updateQuestionnaireUsingPut(questionnaire, questionnaireId);

        // TODO: test validations
    }
    
}
