class EventEmitter{
	constructor(listener, func ){
		this.listener=listener;
		this.func= func;
	}
	on(e,_callback){
		this.listener=e;
		this.func=_callback;
	}
	emit(event){
		if(event==this.listener)
		this.func();
	}
	off(){
		this.func=null;
		this.listener=null;
	}
}

