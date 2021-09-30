import React,{useState} from 'react';
import '../../assets/css/patients.css'
import avatar  from '../../assets/images/avatar.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faLessThanEqual} from '@fortawesome/free-solid-svg-icons'
import { Avatar, LinearProgress } from '@material-ui/core';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import RdvDemand from './rdvDemand';
import { AprouvRdvAction } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { capitalizeFirstLetter } from '../../utils'
import { useQuery } from '@apollo/client';
import { GET_DEMENDES_RDV } from '../../graphql/queries/GET_DEMENDES_RDV';



const DoctorHeader = ({ nom, prenom, profilePictureUrl }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const dispatch = useDispatch();

    const { loading, error, data } = useQuery(GET_DEMENDES_RDV)

    if (loading) return <LinearProgress />
    if (error) return <p>Error(:</p>;

    return (
        <div className="patients__head  d-flex justify-content-between align-items-center">
            <button className="d-block d-sm-none burger"><FontAwesomeIcon icon={faBars}/></button>
            <h2 className="head__txt d-none d-sm-block">Bonjour,<br></br> Dr.{nom} </h2>
            <div className="d-flex align-items-center">
                 <Avatar alt="profile picture" src={profilePictureUrl} style={{marginRight: "16px"}} />
                 <span className="avatar__infos">
                   <span className="avatar__name">M.{prenom} {nom}</span><br></br>
                   <span className="avatar__title"><ArrowForwardIosIcon className="arrow__title"/>Médecin</span>
                 </span>
                 <Dropdown className="notif__drop" isOpen={dropdownOpen} toggle={toggle}>
                   <DropdownToggle tag="span">
                      <span><NotificationsNoneIcon id="notif__icon" /></span>
                   </DropdownToggle>
                   <DropdownMenu right className="mt-3">
                     <h5 className="ml-2 text-center">NOTIFICATIONS</h5>
                     <DropdownItem divider />
                     <DropdownItem className="notifs d-flex justify-content-between align-items-center pt-3">
                        <h6 className="notif__txt text-wrap">Nombre de visites cette semaine a dépacé la moyenne</h6>
                        <h6 className="notif__flag">33 visites</h6>
                     </DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem className="notifs d-flex justify-content-between align-items-center pt-3">
                        <h6 className="notif__txt">Vous avez complété<span className="notif__dossierNbr"> 9 dossiers</span> cette semaine</h6>
                     </DropdownItem>
                     <DropdownItem divider />
                     <h6 className="demand__rdv__txt ml-3 my-1">Demandes de rendez-vous</h6>

                     {data.allRendezVous.nodes.map((v, i) => {
                        const props = {
                           id: v.id,
                           startDate: v.startDate,
                           endDate: v.endDate,
                           nom: v.userAccountByUserId.nom,
                           prenom: v.userAccountByUserId.prenom,
                           role: capitalizeFirstLetter(v.userAccountByUserId.role),
                           profilePicture: v.userAccountByUserId.profilePicture,
                           niveau: v.userAccountByUserId.niveau,
                           specialite: v.userAccountByUserId.specialite,
                           groupe: v.userAccountByUserId.groupe
                        }
                        if (v.isValid !== null) {
                           return (
                              <DropdownItem key={i} className="notifs" onClick={() => dispatch(AprouvRdvAction(props))}>
                                 <RdvDemand {...props} />
                              </DropdownItem>
                           )
                        }
                     })}
                     
                   </DropdownMenu>
                 </Dropdown>
                
            </div>
        </div>
    );
}

export default DoctorHeader;
