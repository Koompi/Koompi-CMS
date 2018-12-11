(ns full-stack.views
  (:require
   [re-frame.core :as re-frame]
   [full-stack.subs :as subs]
   [admin.components.new-posts :refer [content]]
   [admin.components.navbar :refer [navbar]]))



(defn main-panel []
  [:div
   [:div {:class "ui inverted huge borderless fixed fluid menu"}
    [:a {:class "header logoImage"} [:img {:src "/admin/images/logo/amoogli.png"}]]
    [:div {:class "right menu"}
     [:div {:class "item"}
      [:div {:class "ui small input"}
       [:input {:placeholder "Search..."}]]]
     [:a {:class "item"} "Dashboard"]
     [:a {:class "item"} "Settings"]
     [:a {:class "item"} "Profile"]
     [:a {:class "item"} "Help"]]]


   [navbar]])
