Rails.application.routes.draw do
  
  get 'user_wines/index'
  get 'user_wines/show'
  get 'user_wines/new'
  get 'user_wines/edit'
  get 'user_wines/create'
  get 'user_wines/update'
  get 'user_wines/destroy'
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:show, :create, :index]
  resources :wines do   
    resources :reviews, only: [:index, :show]
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
