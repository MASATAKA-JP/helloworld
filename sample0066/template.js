var data = {a: 1}

var vm = new Vue({
  data: data
})

console.log(vm.a = data.a)

vm.a = 2
console.log(data.a)

data.a = 3
console.log(vm.a)

vm.b = 'hi'
console.log(vm.b)

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})

var data = {a: 1}
var vm = new Vue({
  el: '#example',
  data: data
})

console.log(vm.$data === data)
console.log(document.getElementById('example'))
