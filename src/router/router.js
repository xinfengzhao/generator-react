import TodoView from '../components/TodoView';
import About from '../components/About';

export default [
    {
        path: '/',
        name: '待办事项',
        component: TodoView
    },
    {
        path: '/page/about',
        name: '关于',
        component: About
    }
]