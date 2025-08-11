#!/usr/bin/env python3
"""
Backend API Testing for RupeeBee Showcase Website
Tests all API endpoints for functionality, data structure, and error handling
"""

import requests
import json
import sys
import os
from typing import Dict, Any

# Use localhost for testing in the container environment
BASE_URL = "http://localhost:3000"
API_BASE = f"{BASE_URL}/api"

class RupeeBeeAPITester:
    def __init__(self):
        self.results = {
            'passed': 0,
            'failed': 0,
            'errors': []
        }
        
    def log_result(self, test_name: str, success: bool, message: str = ""):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name}")
        if message:
            print(f"   {message}")
        
        if success:
            self.results['passed'] += 1
        else:
            self.results['failed'] += 1
            self.results['errors'].append(f"{test_name}: {message}")
    
    def test_get_stats(self):
        """Test GET /api/stats endpoint"""
        try:
            response = requests.get(f"{API_BASE}/stats", timeout=10)
            
            # Check status code
            if response.status_code != 200:
                self.log_result("GET /api/stats - Status Code", False, f"Expected 200, got {response.status_code}")
                return
            
            # Check JSON response
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("GET /api/stats - JSON Response", False, "Response is not valid JSON")
                return
            
            # Check required fields
            required_fields = ['usersProtected', 'calculationsPerformed', 'fraudPrevented', 'modulesCompleted']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                self.log_result("GET /api/stats - Required Fields", False, f"Missing fields: {missing_fields}")
                return
            
            # Check data types
            numeric_fields = ['usersProtected', 'calculationsPerformed', 'fraudPrevented', 'modulesCompleted']
            for field in numeric_fields:
                if not isinstance(data.get(field), (int, float)):
                    self.log_result("GET /api/stats - Data Types", False, f"{field} should be numeric")
                    return
            
            self.log_result("GET /api/stats", True, f"Returned {len(data)} metrics")
            
        except requests.exceptions.RequestException as e:
            self.log_result("GET /api/stats - Connection", False, f"Request failed: {str(e)}")
    
    def test_get_features(self):
        """Test GET /api/features endpoint"""
        try:
            response = requests.get(f"{API_BASE}/features", timeout=10)
            
            if response.status_code != 200:
                self.log_result("GET /api/features - Status Code", False, f"Expected 200, got {response.status_code}")
                return
            
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("GET /api/features - JSON Response", False, "Response is not valid JSON")
                return
            
            # Check features array
            if 'features' not in data:
                self.log_result("GET /api/features - Structure", False, "Missing 'features' key")
                return
            
            features = data['features']
            if not isinstance(features, list):
                self.log_result("GET /api/features - Structure", False, "'features' should be an array")
                return
            
            # Check for all 5 modules
            expected_modules = ['learn', 'shield', 'calculator', 'sarathi', 'quest']
            feature_ids = [f.get('id') for f in features]
            missing_modules = [mod for mod in expected_modules if mod not in feature_ids]
            
            if missing_modules:
                self.log_result("GET /api/features - Modules", False, f"Missing modules: {missing_modules}")
                return
            
            # Check feature structure
            for feature in features:
                required_fields = ['id', 'name', 'description', 'icon']
                missing_fields = [field for field in required_fields if field not in feature]
                if missing_fields:
                    self.log_result("GET /api/features - Feature Structure", False, f"Feature {feature.get('id')} missing: {missing_fields}")
                    return
            
            self.log_result("GET /api/features", True, f"Returned {len(features)} features with all required modules")
            
        except requests.exceptions.RequestException as e:
            self.log_result("GET /api/features - Connection", False, f"Request failed: {str(e)}")
    
    def test_get_security(self):
        """Test GET /api/security endpoint"""
        try:
            response = requests.get(f"{API_BASE}/security", timeout=10)
            
            if response.status_code != 200:
                self.log_result("GET /api/security - Status Code", False, f"Expected 200, got {response.status_code}")
                return
            
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("GET /api/security - JSON Response", False, "Response is not valid JSON")
                return
            
            # Check required fields
            required_fields = ['securityMeasures', 'certifications', 'fraudTypesDetected']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                self.log_result("GET /api/security - Structure", False, f"Missing fields: {missing_fields}")
                return
            
            # Check arrays
            for field in required_fields:
                if not isinstance(data[field], list):
                    self.log_result("GET /api/security - Data Types", False, f"{field} should be an array")
                    return
            
            self.log_result("GET /api/security", True, f"Security measures: {len(data['securityMeasures'])}, Certifications: {len(data['certifications'])}")
            
        except requests.exceptions.RequestException as e:
            self.log_result("GET /api/security - Connection", False, f"Request failed: {str(e)}")
    
    def test_get_testimonials(self):
        """Test GET /api/testimonials endpoint"""
        try:
            response = requests.get(f"{API_BASE}/testimonials", timeout=10)
            
            if response.status_code != 200:
                self.log_result("GET /api/testimonials - Status Code", False, f"Expected 200, got {response.status_code}")
                return
            
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("GET /api/testimonials - JSON Response", False, "Response is not valid JSON")
                return
            
            # Check testimonials array
            if 'testimonials' not in data:
                self.log_result("GET /api/testimonials - Structure", False, "Missing 'testimonials' key")
                return
            
            testimonials = data['testimonials']
            if not isinstance(testimonials, list):
                self.log_result("GET /api/testimonials - Structure", False, "'testimonials' should be an array")
                return
            
            # Check testimonial structure
            for testimonial in testimonials:
                required_fields = ['id', 'name', 'location', 'rating', 'comment']
                missing_fields = [field for field in required_fields if field not in testimonial]
                if missing_fields:
                    self.log_result("GET /api/testimonials - Testimonial Structure", False, f"Testimonial missing: {missing_fields}")
                    return
            
            self.log_result("GET /api/testimonials", True, f"Returned {len(testimonials)} testimonials")
            
        except requests.exceptions.RequestException as e:
            self.log_result("GET /api/testimonials - Connection", False, f"Request failed: {str(e)}")
    
    def test_get_download_links(self):
        """Test GET /api/download-links endpoint"""
        try:
            response = requests.get(f"{API_BASE}/download-links", timeout=10)
            
            if response.status_code != 200:
                self.log_result("GET /api/download-links - Status Code", False, f"Expected 200, got {response.status_code}")
                return
            
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("GET /api/download-links - JSON Response", False, "Response is not valid JSON")
                return
            
            # Check required platforms
            required_platforms = ['android', 'ios']
            missing_platforms = [platform for platform in required_platforms if platform not in data]
            
            if missing_platforms:
                self.log_result("GET /api/download-links - Platforms", False, f"Missing platforms: {missing_platforms}")
                return
            
            # Check platform structure
            for platform in required_platforms:
                platform_data = data[platform]
                required_fields = ['version', 'size', 'requirements']
                missing_fields = [field for field in required_fields if field not in platform_data]
                if missing_fields:
                    self.log_result("GET /api/download-links - Platform Structure", False, f"{platform} missing: {missing_fields}")
                    return
            
            self.log_result("GET /api/download-links", True, "Both Android and iOS download info available")
            
        except requests.exceptions.RequestException as e:
            self.log_result("GET /api/download-links - Connection", False, f"Request failed: {str(e)}")
    
    def test_post_contact(self):
        """Test POST /api/contact endpoint"""
        try:
            test_data = {
                "name": "Arjun Patel",
                "email": "arjun.patel@example.com",
                "subject": "App Feedback",
                "message": "Great app! The fraud detection feature saved me from a scam."
            }
            
            response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=10)
            
            if response.status_code != 200:
                self.log_result("POST /api/contact - Status Code", False, f"Expected 200, got {response.status_code}")
                return
            
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("POST /api/contact - JSON Response", False, "Response is not valid JSON")
                return
            
            # Check success response
            if not data.get('success'):
                self.log_result("POST /api/contact - Success Flag", False, "Response should indicate success")
                return
            
            if 'message' not in data:
                self.log_result("POST /api/contact - Response Message", False, "Response should include message")
                return
            
            self.log_result("POST /api/contact", True, "Contact form submission successful")
            
        except requests.exceptions.RequestException as e:
            self.log_result("POST /api/contact - Connection", False, f"Request failed: {str(e)}")
    
    def test_post_newsletter(self):
        """Test POST /api/newsletter endpoint"""
        try:
            test_data = {
                "email": "priya.sharma@example.com",
                "name": "Priya Sharma"
            }
            
            response = requests.post(f"{API_BASE}/newsletter", json=test_data, timeout=10)
            
            if response.status_code != 200:
                self.log_result("POST /api/newsletter - Status Code", False, f"Expected 200, got {response.status_code}")
                return
            
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("POST /api/newsletter - JSON Response", False, "Response is not valid JSON")
                return
            
            # Check success response
            if not data.get('success'):
                self.log_result("POST /api/newsletter - Success Flag", False, "Response should indicate success")
                return
            
            if 'message' not in data:
                self.log_result("POST /api/newsletter - Response Message", False, "Response should include message")
                return
            
            self.log_result("POST /api/newsletter", True, "Newsletter signup successful")
            
        except requests.exceptions.RequestException as e:
            self.log_result("POST /api/newsletter - Connection", False, f"Request failed: {str(e)}")
    
    def test_post_feedback(self):
        """Test POST /api/feedback endpoint"""
        try:
            test_data = {
                "rating": 5,
                "feedback": "Excellent app! The financial calculators are very helpful.",
                "module": "Calculator",
                "userId": "user123"
            }
            
            response = requests.post(f"{API_BASE}/feedback", json=test_data, timeout=10)
            
            if response.status_code != 200:
                self.log_result("POST /api/feedback - Status Code", False, f"Expected 200, got {response.status_code}")
                return
            
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("POST /api/feedback - JSON Response", False, "Response is not valid JSON")
                return
            
            # Check success response
            if not data.get('success'):
                self.log_result("POST /api/feedback - Success Flag", False, "Response should indicate success")
                return
            
            if 'message' not in data:
                self.log_result("POST /api/feedback - Response Message", False, "Response should include message")
                return
            
            self.log_result("POST /api/feedback", True, "Feedback submission successful")
            
        except requests.exceptions.RequestException as e:
            self.log_result("POST /api/feedback - Connection", False, f"Request failed: {str(e)}")
    
    def test_404_handling(self):
        """Test 404 error handling for non-existent endpoints"""
        try:
            response = requests.get(f"{API_BASE}/nonexistent", timeout=10)
            
            if response.status_code != 404:
                self.log_result("404 Error Handling - Status Code", False, f"Expected 404, got {response.status_code}")
                return
            
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("404 Error Handling - JSON Response", False, "Error response should be valid JSON")
                return
            
            if 'error' not in data:
                self.log_result("404 Error Handling - Error Message", False, "404 response should include error message")
                return
            
            self.log_result("404 Error Handling", True, "Proper 404 response for non-existent endpoints")
            
        except requests.exceptions.RequestException as e:
            self.log_result("404 Error Handling - Connection", False, f"Request failed: {str(e)}")
    
    def test_invalid_json_handling(self):
        """Test invalid JSON handling for POST endpoints"""
        try:
            # Send invalid JSON to contact endpoint
            response = requests.post(f"{API_BASE}/contact", 
                                   data="invalid json", 
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            
            if response.status_code != 400:
                self.log_result("Invalid JSON Handling - Status Code", False, f"Expected 400, got {response.status_code}")
                return
            
            try:
                data = response.json()
            except json.JSONDecodeError:
                self.log_result("Invalid JSON Handling - JSON Response", False, "Error response should be valid JSON")
                return
            
            if 'error' not in data:
                self.log_result("Invalid JSON Handling - Error Message", False, "400 response should include error message")
                return
            
            self.log_result("Invalid JSON Handling", True, "Proper 400 response for invalid JSON")
            
        except requests.exceptions.RequestException as e:
            self.log_result("Invalid JSON Handling - Connection", False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all API tests"""
        print("=" * 60)
        print("RupeeBee Showcase Website - Backend API Testing")
        print("=" * 60)
        print(f"Testing API at: {API_BASE}")
        print()
        
        # Test GET endpoints
        print("Testing GET Endpoints:")
        print("-" * 30)
        self.test_get_stats()
        self.test_get_features()
        self.test_get_security()
        self.test_get_testimonials()
        self.test_get_download_links()
        
        print()
        
        # Test POST endpoints
        print("Testing POST Endpoints:")
        print("-" * 30)
        self.test_post_contact()
        self.test_post_newsletter()
        self.test_post_feedback()
        
        print()
        
        # Test error handling
        print("Testing Error Handling:")
        print("-" * 30)
        self.test_404_handling()
        self.test_invalid_json_handling()
        
        print()
        print("=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        print(f"✅ Passed: {self.results['passed']}")
        print(f"❌ Failed: {self.results['failed']}")
        print(f"Total Tests: {self.results['passed'] + self.results['failed']}")
        
        if self.results['errors']:
            print("\nFAILED TESTS:")
            for error in self.results['errors']:
                print(f"  • {error}")
        
        print()
        
        # Return success status
        return self.results['failed'] == 0

if __name__ == "__main__":
    tester = RupeeBeeAPITester()
    success = tester.run_all_tests()
    
    if success:
        print("🎉 All tests passed! Backend API is working correctly.")
        sys.exit(0)
    else:
        print("⚠️  Some tests failed. Please check the errors above.")
        sys.exit(1)