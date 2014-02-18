/**
 * Login Class
 */
function Login() {
	// sessionId -> user map
	this.sessionMap = {
		99999 : { name: 'Foo', email: 'foo@bar.com' }
	};
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
	return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
	return sessionId in this.sessionMap;
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	var sessionId = new Date().getTime();
	this.sessionMap[sessionId] = { name: _name, email: _email } 
	
	console.log('new session id ' + sessionId + ' for login::' + _email);
	
	return sessionId;
};

/**
 * Logout from the server
 */ 
Login.prototype.logout = function(sessionId) {
	console.log('logout::' + sessionId);
	//document.cookie = sessionId+ '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	//this.sessionMap.remove[sessionId];
 	//this.sessionMap.clear();
	//this.sessionMap[sessionId] = { name: undefined, email: undefined }
        //sessionId = undefined;
        //var nameOut = this.sessionMap[sessionId].name;
        delete this.sessionMap[sessionId];
        //response.end(nameOut+' logged out\n');
        //return sessionId;
};

Login.prototype.reset = function(sessionId) {
        var _name = this.sessionMap[sessionId].name;
        var _email = this.sessionMap[sessionId].email;
	var newsessionId = new Date().getTime();
	console.log('logout::' + sessionId);
	delete this.sessionMap[sessionId];
	this.sessionMap[newsessionId] = { name: _name, email: _email } 
	console.log('new session id ' + newsessionId + ' for login::' + _email);
        return newsessionId;
};

// Export the Login class
module.exports = new Login();
