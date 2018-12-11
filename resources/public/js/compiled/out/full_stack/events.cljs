(ns full-stack.events
  (:require
   [re-frame.core :as re-frame]
   [full-stack.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
