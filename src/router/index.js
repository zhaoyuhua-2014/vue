import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import AnalysisPage from '@/pages/detail/analysis'
import CountPage from '@/pages/detail/count'
import ForecastlPage from '@/pages/detail/forecast'
import PublishlPage from '@/pages/detail/publish'

Vue.use(Router)

export default new Router({
	mode : 'history',
  routes: [
    {
      path : '/',
      component : IndexPage
    },{
      path : '/detail',
      component : DetailPage,
      children : [
      	{
      		path : "analysis",
      		compoment : AnalysisPage
      	},{
      		path : "count",
      		compoment : CountPage
      	},{
      		path : "forecast",
      		compoment : ForecastlPage
      	},{
      		path : "publish",
      		compoment : PublishlPage
      	}
      ]
    }
  ]
})
