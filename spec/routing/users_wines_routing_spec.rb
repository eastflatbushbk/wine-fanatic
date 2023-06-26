require "rails_helper"

RSpec.describe UsersWinesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/users_wines").to route_to("users_wines#index")
    end

    it "routes to #show" do
      expect(get: "/users_wines/1").to route_to("users_wines#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/users_wines").to route_to("users_wines#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/users_wines/1").to route_to("users_wines#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/users_wines/1").to route_to("users_wines#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/users_wines/1").to route_to("users_wines#destroy", id: "1")
    end
  end
end
