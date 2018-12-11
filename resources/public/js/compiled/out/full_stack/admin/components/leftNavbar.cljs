(ns full-stack.admin.components.leftNavbar
  (:require [reagent.core :as r]))

(def atom-toggle-menu (r/atom {:show false}))

(defn toggle-menu
  []
  (if (get-in @atom-toggle-menu [:show])
   [:ul {:class "nav flex-column sub-menu menuToggleFade"}
    [:li {:class "nav-item"}
     [:a {:class "nav-link", :href "/admin/dashboard/add-product"} "Add Product"]]
    [:li {:class "nav-item"}
     [:a {:class "nav-link", :href "/admin/dashboard/all-products"} "All Products"]]
    [:li {:class "nav-item"}
     [:a {:class "nav-link", :href "/admin/dashboard/available-products"} "Available"]]
    [:li {:class "nav-item"}
     [:a {:class "nav-link", :href "/admin/dashboard/sold-products"} "Sold"]]]))

(defn menuToggle []
  (swap! atom-toggle-menu assoc :show (not (get-in @atom-toggle-menu [:show]))))


(defn leftNavbar []
  [:nav {:class "sidebar sidebar-offcanvas", :id "sidebar"}
   [:ul {:class "nav"}
    [:li {:class "nav-item nav-profile"}
     [:div {:class "nav-link"}
      [:div {:class "user-wrapper"}
       [:div {:class "profile-image"}
        [:img {:src "/admin/images/faces/avatar.svg", :alt "profile image"}]]
       [:div {:class "text-wrapper"}
        [:p {:class "profile-name"} "SAN Vuthy"]
        [:div
         [:small {:class "designation text-muted"} "Admin"]
         [:span {:class "status-indicator online"}]]]]
      [:a {:class "btn btn-add-product btn-block" :href "/admin/dashboard/add-product"} [:img {:src "/admin/images/add-product.svg" :height "25px" :style {:margin-right "10px"}}]
        "Add Product"]]]
    [:li {:class "nav-item"}
     [:a {:class "nav-link" :href "/admin/dashboard"}
      [:img {:src "/admin/images/home.svg" :height "25px" :style {:margin-right "10px"}}]
      [:span {:class "menu-title"} "Dashboard"]]]

    [:li {:class "nav-item"}
     [:a {:class "nav-link" :href "/admin/dashboard/sell-product"}
      [:img {:src "/admin/images/sell.svg" :height "25px" :style {:margin-right "10px"}}]
      [:span {:class "menu-title"} "Sell Product"]]]

    [:li {:class "nav-item" :onClick #(menuToggle) :style {:position "relative"}}
     [:a {:class "nav-link", :data-toggle "collapse" :aria-expanded "false", :aria-controls "ui-basic"}
      [:img {:src "/admin/images/stock.svg" :height "25px" :style {:margin-right "10px"}}]
      [:span {:class "menu-title"} "Stock"]
      [:i {:class (if (get-in @atom-toggle-menu [:show])"mdi mdi-chevron-down icon-down" "mdi mdi-chevron-right icon-right")}]]

     [:div {:class "collapse"}] (toggle-menu)]


    [:li {:class "nav-item"}
     [:a {:class "nav-link", :href "/admin/dashboard/users"}
      [:img {:src "/admin/images/account.svg" :height "25px" :style {:margin-right "10px"}}]
      [:span {:class "menu-title"} "User's Info"]]]]])
