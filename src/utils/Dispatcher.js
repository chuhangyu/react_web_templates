import Event from 'events';

var eventEmitter = new Event.EventEmitter();

var Dispatcher = function (Action, Config) {
	var dispatcher = new Object();

	dispatcher.Action = Action;
	dispatcher.Config = Config;

	dispatcher.init = function (Action, Config) {
		//这个是在父组件中用的初始化
		//规定了用来响应事件的Action
		dispatcher.Action = Action;
		dispatcher.Config = Config;
	}

	dispatcher.initPublisher = function (Config) {
		//这个是在子组件中用的初始化
		//不需要管Action
		dispatcher.Config = Config;
	}

	dispatcher.sub = function (handler) {
		//初始化Action，给App增加一个sub
		//handler指定了哪个function来响应这个Action
		eventEmitter.on(dispatcher.Config.getGlobalEventName(), handler);
	}

	dispatcher.pub = function (actionName, dataFromChild, callback) {
		//子组件触发Action
		eventEmitter.emit(dispatcher.Config.getGlobalEventName(), actionName, dataFromChild, callback);
	}

	dispatcher.handler = function (actionName, dataFromChild, currentState, newStateHandler, callback) {
		//分发到Action中进行处理
		var isActionExist = Boolean(dispatcher.Action[actionName])
		if (isActionExist) {
			dispatcher.Action[actionName](dataFromChild, currentState, newStateHandler, callback);
		} else {
			console.warn("Action:" + actionName + " 不存在ActionList中！");
			return null;
		}
	}

	dispatcher.unsub = function (callback) {
		eventEmitter.removeListener(dispatcher.Config.getGlobalEventName(), callback);
	}

	return dispatcher;
}


export default Dispatcher;
