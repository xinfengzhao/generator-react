import { observable, computed, action } from 'mobx';
import { message } from 'antd';
class AppStore {
    @observable todos = []; //todos列表
    @observable newtodo = ""; //新添加的todo
    @observable selectedRowKeys = []; //选择行的key
    @observable loading = true; //Table-loading
    @observable _key = 0; //key
    @observable total = 0; //数据量

    @action fetchTodos(){
        // 操作数据接口
        this.total = 5;
        this._key = 4;
        this.todos = [
            {key: 1, text: 'eat'},
            {key: 2, text: 'play'},
            {key: 3, text: 'sleep'},
            {key: 4, text: 'study'},
            {key: 5, text: 'work'}
        ];
        this._key = this.todos[this.todos.length-1].key;
        this.loading = false;
    }

    @action fetchTodoAdd(){
        // 操作数据接口
        const newTodoObject = {
            key: this._key + 1,
            text: this.newtodo
        };
        this.todos.push(newTodoObject);
        this.total += 1;
        this._key += 1;
        message.success(`添加事件${this.newtodo}成功！`);
    }

    @action fetchTodoRemove(keyArr){
        // 操作数据接口
        if(keyArr.length > 1) {
            this.todos = this.todos.filter(item => this.selectedRowKeys.indexOf(item.key) === -1);
            this.selectedRowKeys = [];
        }else{
            this.todos = this.todos.filter(item => item.key !== keyArr[0]);
        }
        this.total -= keyArr.length;
        message.success('删除成功！');
        this.selectedRowKeys = [];
    }

    //添加
    @action AddTodo = () => {
        this._key += 1;
        this.fetchTodoAdd();
    };

    //checkbox选择
    @action onSelectChange = (selectedRowKeys) => {
        this.selectedRowKeys = selectedRowKeys;
    };

    //删除单个
    @action remove(key) {
        this.selectedRowKeys = [key];
        this.fetchTodoRemove(this.selectedRowKeys);
    }

    //删除选择
    @action removeSelected() {
        this.fetchTodoRemove(this.selectedRowKeys);
    }

    //计算长度
    @computed get TodoListCount() {
        return this.todos.length;
    }

}
export default AppStore;