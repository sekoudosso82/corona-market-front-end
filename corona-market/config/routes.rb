Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      
      resources :watchlist_items
      resources :watchlists
  
      resources :items
  
      resources :shopping_carts
      resources :shopping_cart_items
  
      resources :offers
      
      resources :users
      post '/signup', to: "users#create"
      post "/login", to: "auth#login"
      get '/auto_login', to: 'auth#auto_login'
      
    end
  end
end
  # namespace :api do
  #   namespace :v1 do
  #     resources :watchlist_items
  #   end
  # end
  # namespace :api do
  #   namespace :v1 do
  #     resources :shopping_cart_items
  #   end
  # end
  # namespace :api do
  #   namespace :v1 do
  #     resources :offers
  #   end
  # end
  # namespace :api do
  #   namespace :v1 do
  #     resources :items
  #   end
  # end
  # namespace :api do
  #   namespace :v1 do
  #     resources :items
  #   end
  # end
  # namespace :api do
  #   namespace :v1 do
  #     resources :shopping_carts
  #   end
  # end
  # namespace :api do
  #   namespace :v1 do
  #     resources :offers
  #   end
  # end
  # namespace :api do
  #   namespace :v1 do
      # resources :users
      # # get '/profile', to: 'users#profile'

      # post '/signup', to: "users#create"
      # post "/login", to: "auth#login"

      # get '/auto_login', to: 'auth#auto_login'
#     end
#   end
#   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
