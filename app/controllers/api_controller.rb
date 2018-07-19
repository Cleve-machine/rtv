class ApiController < ApplicationController
  protect_from_forgery
  skip_before_action :verify_authenticity_token

  def getTree
  	@tree = current_user.tree.first
  	if @tree 
  		render json: @tree.data
  	else
	  	render json: nil
	end  	
  end

  def saveTree
  	data = params[:data]
  	if data
		if current_user.tree.blank? == false 
			@tree = current_user.tree
			@tree.update(data: data)
			render json: "success"
		else
			@tree = current_user.tree.new(:data => data)
			@tree.save
			render json: "success"
		end		
	else
		render json: "parameter error"
  	end	
  end

  def getTreeName
  	@tree = current_user.tree.first
  	if @tree 
  		render json: @tree.tree_name
  	else
	  	render json: nil
	end
  end

  def setTreeName
  	tree_name = params[:tree_name]
  	@tree = current_user.tree
  	@tree.update( tree_name: tree_name)

  	render json: "success"
  end
end
