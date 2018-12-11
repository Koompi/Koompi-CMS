(ns full-stack.admin.components.footer)

(defn footer []
  [:footer {:class "footer"}
   [:div {:class "container-fluid clearfix"}
    [:span {:class "text-muted d-block text-center text-sm-left d-sm-inline-block"} "Copyright © 2018"
     ". All rights reserved."]
    [:span {:class "float-none float-sm-right d-block mt-1 mt-sm-0 text-center"} "made with "
     [:i {:class "mdi mdi-heart text-danger"}] " Koompi Team"]]])
