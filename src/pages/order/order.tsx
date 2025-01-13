import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './order.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='order'>
      <Text>我的订单</Text>
    </View>
  )
}
