/* 
 * Hydrogen Integration API
 *
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.1
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Integration.Client;
using Integration.Api;
using Integration.ModelEntity;

namespace Integration.Test
{
    /// <summary>
    ///  Class for testing SMTPApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class SMTPApiTests
    {
        private SMTPApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new SMTPApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of SMTPApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' SMTPApi
            //Assert.IsInstanceOfType(typeof(SMTPApi), instance, "instance is a SMTPApi");
        }

        
        /// <summary>
        /// Test GetSmtpStatus
        /// </summary>
        [Test]
        public void GetSmtpStatusTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Guid? emailId = null;
            //var response = instance.GetSmtpStatus(emailId);
            //Assert.IsInstanceOf<Email> (response, "response is Email");
        }
        
        /// <summary>
        /// Test SendMail
        /// </summary>
        [Test]
        public void SendMailTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //SmtpVO smtpVO = null;
            //var response = instance.SendMail(smtpVO);
            //Assert.IsInstanceOf<SmtpResponseVO> (response, "response is SmtpResponseVO");
        }
        
    }

}