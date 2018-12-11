(ns full-stack.admin.dashboard
  (:require [ajax.core :refer [GET POST]]
            [full-stack.admin.components.leftNavbar :refer [leftNavbar]]
            [full-stack.admin.components.rightNavbar :refer [rightNavbar]]
            [full-stack.admin.components.footer :refer [footer]]
            [reagent.core :as r]))


(defn content
  []
  [:div {:class "col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card"}
   [:div {:class "card card-statistics"}
    [:div {:class "card-body"}
     [:div {:class "clearfix"}
      [:div {:class "float-left"}
       [:i {:class "mdi mdi-cube text-danger icon-lg"}]]
      [:div {:class "float-right"}
       [:p {:class "mb-0 text-right"} "Total Revenue"]
       [:div {:class "fluid-container"}
        [:h3 {:class "font-weight-medium text-right mb-0"} "$65,650"]]]]
     [:p {:class "text-muted mt-3 mb-0"}
      [:i {:class "mdi mdi-alert-octagon mr-1", :aria-hidden "true"}]" 65% lower growth"]]]])

(defn mainDashboard
  []
  [:div {:class "container-scroller"}
    (rightNavbar)
    [:div {:class "container-fluid page-body-wrapper"}
     (leftNavbar)
     [:div {:class "main-panel"}
      [:div {:class "content-wrapper"}
       [:div {:class "row"}
        (content)
        (content)]]
      (footer)]]])

(defn dashboard []
     (mainDashboard))
