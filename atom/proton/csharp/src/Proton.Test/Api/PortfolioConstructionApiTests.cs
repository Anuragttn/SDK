/* 
 * Hydrogen Proton API
 *
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.2
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

using Proton.Client;
using Proton.Api;

namespace Proton.Test
{
    /// <summary>
    ///  Class for testing PortfolioConstructionApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class PortfolioConstructionApiTests
    {
        private PortfolioConstructionApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new PortfolioConstructionApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of PortfolioConstructionApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' PortfolioConstructionApi
            //Assert.IsInstanceOfType(typeof(PortfolioConstructionApi), instance, "instance is a PortfolioConstructionApi");
        }

        
        /// <summary>
        /// Test Mvo
        /// </summary>
        [Test]
        public void MvoTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //MvoRequest mvoRequest = null;
            //var response = instance.Mvo(mvoRequest);
            //Assert.IsInstanceOf<Dictionary<string, Object>> (response, "response is Dictionary<string, Object>");
        }
        
    }

}
