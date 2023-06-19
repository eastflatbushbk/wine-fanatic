class UserWinesController < ApplicationController
  
  def index
    @user_wines = UserWine.all
  end

  def show
    @user_wine = UserWine.find(params[:id])
  end

  def new
    @user_wine = UserWine.new
  end

  def edit
    @user_wine = UserWine.find(params[:id])
  end

  def create
    @user_wine = UserWine.new(user_wine_params)

    if @user_wine.save
      redirect_to @user_wine, notice: 'User wine was successfully created.'
    else
      render :new
    end
  end

  def update
    @user_wine = UserWine.find(params[:id])

    if @user_wine.update(user_wine_params)
      redirect_to @user_wine, notice: 'User wine was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @user_wine = UserWine.find(params[:id])
    @user_wine.destroy

    redirect_to user_wines_url, notice: 'User wine was successfully destroyed.'
  end

  private

  def user_wine_params
    params.require(:user_wine).permit(:user_id, :wine_id)
  end

end
