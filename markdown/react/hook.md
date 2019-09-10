# 组件生命周期的三个阶段
### Mounting（加载阶段）
### Updating（更新阶段）
### Unmounting（卸载阶段）

## **旧的生命周期**

## Mounting（加载阶段：涉及6个钩子函数）
### constructor()
* `加载的时候调用一次，可以初始化state`

### getDefaultProps()
 * `设置默认的props，也可以用dufaultProps设置组件的默认属性。`

### getInitialState()
* `初始化state，可以直接在constructor中定义this.state`

### componentWillMount()
* `组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state`

### render()
* `react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行`

### componentDidMount()
* `组件渲染之后调用，只调用一次`

## Updating（更新阶段：涉及5个钩子函数)

### componentWillReceivePorps(nextProps)
* `组件加载时不调用，组件接受新的props时调用`

### shouldComponentUpdate(nextProps, nextState)
* `组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）`

### componentWillUpdata(nextProps, nextState)
* `组件加载时不调用，只有在组件将要更新时才调用，此时可以修改state`

### componentDidUpdate()
* `组件加载时不调用，组件更新完成后调用`

## Unmounting（卸载阶段：涉及1个钩子函数）
### componentWillUnmount()
* ` 组件卸载时触发，只调用一次`



![Alt Text](./img/hook.png)

React16新的生命周期弃用了componentWillMount、componentWillReceivePorps，componentWillUpdate
新增了getDerivedStateFromProps、getSnapshotBeforeUpdate来代替弃用的三个钩子函数（componentWillMount、componentWillReceivePorps，componentWillUpdate）
React16并没有删除这三个钩子函数，但是不能和新增的钩子函数（getDerivedStateFromProps、getSnapshotBeforeUpdate）混用，React17将会删除componentWillMount、componentWillReceivePorps，componentWillUpdate
新增了对错误的处理（componentDidCatch）

