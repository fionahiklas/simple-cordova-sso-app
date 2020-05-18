/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
  onDeviceReady: function() {
      this.receivedEvent('deviceready');
      console.log("Setting button handler");
      clickMe = document.getElementById("clickMe");

      clickMe.onclick = function () {
	    console.log("I got clicked!");
        var inAppBrowserRef = window.open('http://www.ginginwww.com:9292/page', '_blank', 'location=yes');
	    inAppBrowserRef.addEventListener('loadstart', function (event) { console.log('loadstart event, URL: ' + event.url); });
	  
	    inAppBrowserRef.addEventListener('loadstop', function (event) { console.log('loadstop event, URL: ' + event.url); });
	  
	    inAppBrowserRef.addEventListener('loaderror', function (event) { console.log('loaderror event, URL: ' + event.url + ' message: ' + event.message); });
	  
	    inAppBrowserRef.addEventListener('beforeload', function (event) { console.log('beforeload event, URL: ' + event.url); });
	  
	    inAppBrowserRef.addEventListener('message', function (event) { console.log('message event, message: ' + event.message); });
      }

      document.getElementById('bbc').onclick = function () {
          console.log("BBC Button got clicked");
          window.Location = "http://www.bbc.co.uk"
      }

      document.getElementById('page').onclick = function () {
          console.log("Page Button got clicked");
          window.Location = "http://192.168.209.210:9292/page"
      }

      document.getElementById('somestuff').onclick = function () {
          console.log("Somestuff Button got clicked");
          window.Location = "http://192.168.209.210:9292/sometsuff"
      }

      document.getElementById('bbcInApp').onclick = function () {
          console.log("BBC InApp Button got clicked");
          var inAppBrowserRef = window.open('http://www.bbc.co.uk', '_blank', 'location=yes');
      }

      document.getElementById('pageInApp').onclick = function () {
          console.log("Page InApp Button got clicked");
          var inAppBrowserRef = window.open('http://192.168.123.101:9292/page', '_blank', 'location=yes');
          inAppBrowserRef.addEventListener('loaderror', function (event) { console.log('loaderror event, URL: ' + event.url + ' message: ' + event.message); });

      }

      document.getElementById('somestuffInApp').onclick = function () {
          console.log("Somestuff InApp Button got clicked");
          var inAppBrowserRef = window.open('http://192.168.123.101:9292/somestuff', '_blank', 'location=yes');
          inAppBrowserRef.addEventListener('loaderror', function (event) { console.log('loaderror event, URL: ' + event.url + ' message: ' + event.message); });

      }

      console.log("Set up the buttons");
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
