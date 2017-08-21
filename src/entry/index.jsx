import 'antd/dist/antd.less';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
var isIE = function () {
	return !!window.ActiveXObject || "ActiveXObject" in window || navigator.userAgent.indexOf("Edge") != -1
}

ReactDOM.render(<App />, document.getElementById('react-content'));