import React, { Component } from 'react';
import {Loader, Dimmer, Message, Card, Grid} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
//import {SupplyChainInstance} from '../ethereum/contractInstance';
import {FactoryInstance} from '../ethereum/factoryInstance';
import SubmitForm from './SubmitForm';

class Factory extends Component {
  state = {
    msg:'',
    errorMessage:'',
    loadingData:false,
    account:'',
    description:'',
    freightCarrierAddress:'',
    originCustomsAddress:'',
    consigneeAddress:'',
    deployedChains:[],
  }

  async componentDidMount(){
    this.setState({loadingData:true});
    document.title = "Azure UI";

    const accounts = await web3.eth.getAccounts();
    let deployedChains = await FactoryInstance.methods.getDeployedSupplyChain().call({from:accounts[0]});
    this.setState({loadingData:false, account:accounts[0], deployedChains});
  }

  renderChains(){
    const items = this.state.deployedChains.map(chainID => {
      return {
        href:'/UI-project/'+chainID,
        header: "Address: " + chainID,
        description: "Click for Details",
        fluid: true,
        style: { overflowWrap: 'break-word' },
      };
    });

    return <Card.Group items={items} />;
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({errorMessage:'', loading:true, msg:''});

    try{
      let {description, freightCarrierAddress, originCustomsAddress, consigneeAddress, account} = this.state;
      let deployedAddress = await FactoryInstance.methods.createSupplyChain(description, freightCarrierAddress, originCustomsAddress, consigneeAddress).send({from:account});
      console.log(deployedAddress);
      this.setState({msg:'Contract deployed successfully!'});
    }catch(err){
      this.setState({errorMessage:err.message});
    }

    this.setState({loading:false});
  }

  render() {
    const { account } = this.state;
    if(this.state.loadingData){
      return (
        <Dimmer active inverted>
        <Loader size='massive'>Loading...</Loader>
        </Dimmer>
        );
    }
    return (
      <div>
      <h1>Deployed Supplychain Transportation Contracts</h1>
      <Grid stackable>
        <Grid.Column width={12}>
          {this.state.deployedChains.length>0 && this.renderChains()}
          {this.state.deployedChains.length===0 && <p>No contracts deployed!</p>}
          </Grid.Column>
          <Grid.Column width={4}>
          <Grid.Row>
            <SubmitForm account={account} />
          </Grid.Row>
        </Grid.Column>
      </Grid>
      </div>
      );
  }
}

export default Factory;