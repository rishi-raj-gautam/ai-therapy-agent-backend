# Postman Endpoints - Copy & Paste Ready

## Base URL
```
http://localhost:3001
```

---

## 1. Health Check
**Method:** `GET`  
**URL:** `http://localhost:3001/health`  
**Headers:** None  
**Body:** None

---

## 2. Register User
**Method:** `POST`  
**URL:** `http://localhost:3001/auth/register`  
**Headers:**
```
Content-Type: application/json
```
**Body (raw JSON):**
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "TestPassword123!"
}
```

---

## 3. Login
**Method:** `POST`  
**URL:** `http://localhost:3001/auth/login`  
**Headers:**
```
Content-Type: application/json
```
**Body (raw JSON):**
```json
{
  "email": "test@example.com",
  "password": "TestPassword123!"
}
```
**Note:** Copy the `token` from response for next requests

---

## 4. Get Current User
**Method:** `GET`  
**URL:** `http://localhost:3001/auth/me`  
**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```
**Body:** None

---

## 5. Logout
**Method:** `POST`  
**URL:** `http://localhost:3001/auth/logout`  
**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```
**Body:** None

---

## 6. Create Chat Session
**Method:** `POST`  
**URL:** `http://localhost:3001/chat/sessions`  
**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json
```
**Body:** None (empty)

**Note:** Copy the `sessionId` from response for next chat requests

---

## 7. Get Chat Session
**Method:** `GET`  
**URL:** `http://localhost:3001/chat/sessions/YOUR_SESSION_ID_HERE`  
**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```
**Body:** None

---

## 8. Send Message
**Method:** `POST`  
**URL:** `http://localhost:3001/chat/sessions/YOUR_SESSION_ID_HERE/messages`  
**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json
```
**Body (raw JSON):**
```json
{
  "message": "Hello, I am feeling anxious today. Can you help me?"
}
```

---

## 9. Get Chat History
**Method:** `GET`  
**URL:** `http://localhost:3001/chat/sessions/YOUR_SESSION_ID_HERE/history`  
**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```
**Body:** None

---

## 10. Create Mood Entry
**Method:** `POST`  
**URL:** `http://localhost:3001/api/mood`  
**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json
```
**Body (raw JSON):**
```json
{
  "score": 7,
  "note": "Feeling good today after a walk",
  "context": "morning",
  "activities": ["exercise", "meditation"]
}
```

---

## 11. Log Activity
**Method:** `POST`  
**URL:** `http://localhost:3001/api/activity`  
**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json
```
**Body (raw JSON):**
```json
{
  "type": "exercise",
  "name": "Morning Walk",
  "description": "30 minute walk in the park",
  "duration": 30,
  "difficulty": "easy",
  "feedback": "Felt energized after the walk"
}
```

---

## Quick Testing Order:

1. **Health Check** - Verify server is running
2. **Register** - Create a new user (or use existing)
3. **Login** - Get authentication token
4. **Get Current User** - Test protected endpoint
5. **Create Chat Session** - Get session ID
6. **Send Message** - Test chat functionality
7. **Get Chat History** - View messages
8. **Create Mood Entry** - Log mood
9. **Log Activity** - Log activity
10. **Logout** - End session

---

## Postman Environment Variables (Optional)

Create these variables in Postman:
- `base_url` = `http://localhost:3001`
- `token` = (set automatically after login)
- `session_id` = (set automatically after creating session)

Then use: `{{base_url}}/auth/login` instead of full URL
